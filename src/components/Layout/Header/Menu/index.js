import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { MenuWrapper, MenuItem, SubMenuItemWrapper } from "./style";
const Menu = () => {
  const result = useStaticQuery(graphql`
    fragment menuItemData on ContentfulMenuItem {
      id
      label
    }

    query MenuQuery {
      contentfulMenu {
        menuItem {
          ...menuItemData
          subMenuItem {
            ...menuItemData
            page {
              slug
            }
          }
          page {
            slug
          }
        }
      }
    }
  `);
  console.log(result);
  return (
    <MenuWrapper>
      {result.contentfulMenu.menuItem.map((e) => (
        <MenuItem key={e.id}>
          {e.page != null ? (
            <Link to={`/${e.page.slug}`}>{e.label}</Link>
          ) : (
            <SubMenuItemWrapper>
              <div>{e.label}</div>
              <div>
                {e.subMenuItem?.map((d) => (
                  <div key={d.id}>
                    <Link to={`/${d.page.slug}`}>{d.label}</Link>
                  </div>
                ))}
              </div>
            </SubMenuItemWrapper>
          )}
        </MenuItem>
      ))}
    </MenuWrapper>
  );
};
export default Menu;
