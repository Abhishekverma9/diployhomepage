import React from "react";

function Header() {
  return (
    <div className="">
      <header className="nav flex justify-between pb-1">
        <div>
          <img
            src="https://a.storyblok.com/f/165154/261x55/ecf04f407f/gelato_logo_black.svg"
            className="logoimage"
          />
        </div>
        <div className="flex flex-row">
          {[
            {
              label: "Contact",
              img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDhweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iNDhweCIgZmlsbD0iIzAwMDAwMCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNMTIgMWMtNC45NyAwLTkgNC4wMy05IDl2N2MwIDEuNjYgMS4zNCAzIDMgM2gzdi04SDV2LTJjMC0zLjg3IDMuMTMtNyA3LTdzNyAzLjEzIDcgN3YyaC00djhoNHYxaC03djJoNmMxLjY2IDAgMy0xLjM0IDMtM1YxMGMwLTQuOTctNC4wMy05LTktOXoiLz48L3N2Zz4=",
            },
            {
              label: "IN/INR",
              img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDhweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iNDhweCIgZmlsbD0iIzAwMDAwMCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMS45OSAyQzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyem02LjkzIDZoLTIuOTVjLS4zMi0xLjI1LS43OC0yLjQ1LTEuMzgtMy41NiAxLjg0LjYzIDMuMzcgMS45MSA0LjMzIDMuNTZ6TTEyIDQuMDRjLjgzIDEuMiAxLjQ4IDIuNTMgMS45MSAzLjk2aC0zLjgyYy40My0xLjQzIDEuMDgtMi43NiAxLjkxLTMuOTZ6TTQuMjYgMTRDNC4xIDEzLjM2IDQgMTIuNjkgNCAxMnMuMS0xLjM2LjI2LTJoMy4zOGMtLjA4LjY2LS4xNCAxLjMyLS4xNCAyIDAgLjY4LjA2IDEuMzQuMTQgMkg0LjI2em0uODIgMmgyLjk1Yy4zMiAxLjI1Ljc4IDIuNDUgMS4zOCAzLjU2LTEuODQtLjYzLTMuMzctMS45LTQuMzMtMy41NnptMi45NS04SDUuMDhjLjk2LTEuNjYgMi40OS0yLjkzIDQuMzMtMy41NkM4LjgxIDUuNTUgOC4zNSA2Ljc1IDguMDMgOHpNMTIgMTkuOTZjLS44My0xLjItMS40OC0yLjUzLTEuOTEtMy45NmgzLjgyYy0uNDMgMS40My0xLjA4IDIuNzYtMS45MSAzLjk2ek0xNC4zNCAxNEg5LjY2Yy0uMDktLjY2LS4xNi0xLjMyLS4xNi0yIDAtLjY4LjA3LTEuMzUuMTYtMmg0LjY4Yy4wOS42NS4xNiAxLjMyLjE2IDIgMCAuNjgtLjA3IDEuMzQtLjE2IDJ6bS4yNSA1LjU2Yy42LTEuMTEgMS4wNi0yLjMxIDEuMzgtMy41NmgyLjk1Yy0uOTYgMS42NS0yLjQ5IDIuOTMtNC4zMyAzLjU2ek0xNi4zNiAxNGMuMDgtLjY2LjE0LTEuMzIuMTQtMiAwLS42OC0uMDYtMS4zNC0uMTQtMmgzLjM4Yy4xNi42NC4yNiAxLjMxLjI2IDJzLS4xIDEuMzYtLjI2IDJoLTMuMzh6Ii8+PC9zdmc+",
            },
            {
              label: "Cart",
              img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDhweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iNDhweCIgZmlsbD0iIzAwMDAwMCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik03IDE4Yy0xLjEgMC0xLjk5LjktMS45OSAyUzUuOSAyMiA3IDIyczItLjkgMi0yLS45LTItMi0yek0xIDJ2MmgybDMuNiA3LjU5LTEuMzUgMi40NWMtLjE2LjI4LS4yNS42MS0uMjUuOTYgMCAxLjEuOSAyIDIgMmgxMnYtMkg3LjQyYy0uMTQgMC0uMjUtLjExLS4yNS0uMjVsLjAzLS4xMi45LTEuNjNoNy40NWMuNzUgMCAxLjQxLS40MSAxLjc1LTEuMDNsMy41OC02LjQ5Yy4wOC0uMTQuMTItLjMxLjEyLS40OCAwLS41NS0uNDUtMS0xLTFINS4yMWwtLjk0LTJIMXptMTYgMTZjLTEuMSAwLTEuOTkuOS0xLjk5IDJzLjg5IDIgMS45OSAyIDItLjkgMi0yLS45LTItMi0yeiIvPjwvc3ZnPg==",
            },
            {
              label: "Sign In",
              img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDhweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iNDhweCIgZmlsbD0iIzAwMDAwMCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMiAxMmMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNC00IDEuNzktNCA0IDEuNzkgNCA0IDR6bTAgMmMtMi42NyAwLTggMS4zNC04IDR2MmgxNnYtMmMwLTIuNjYtNS4zMy00LTgtNHoiLz48L3N2Zz4=",
            },
          ].map((nav) => (
            <div className="nav-item">
              <img className="contactlogo" src={nav.img} />
              <span>{nav.label}</span>{" "}
            </div>
          ))}
          <button className="btn">Sign Up for Free</button>
        </div>
      </header>
      <div className="seperator"></div>
      <header className="main flex justify-between">
        <div className="flex flex-row">
          {[
            { label: "Products", items: ["Best Sellers", "Coding"] },
            { label: "Start selling", items: ["Best Sellers", "Coding"] },
            { label: "Tools and apps", items: ["Best Sellers", "Coding"] },
            { label: "Pricing", items: ["Best Sellers", "Coding"] },
            { label: "Resources", items: ["Best Sellers", "Coding"] },
            { label: "Pro sellers", items: ["Best Sellers", "Coding"] },
            { label: "GelatoConnect", items: ["Best Sellers", "Coding"] },
          ].map((nav, index) => (
            <div key={index} className="nav-item-2">
              <span className="dropdownheader">{nav.label}</span>
              {nav.items && (
                <>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="nav-icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                  <ul className="subItems">
                    {nav.items.map((item, idx) => (
                      <li key={idx} className="subItem">
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </header>
      <div className="seperator"></div>
    </div>
  );
}

export default Header;
