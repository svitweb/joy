import React, {Component} from 'react';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      settings: false
    };
  }

  toggleMenu = () => {
    this.state.open && this.state.settings && this.setState({
      settings: !this.state.settings
    });

    this.setState({
      open: !this.state.open
    });
  };

  toggleSettings = () => {
    !this.state.settings && !this.state.open && this.setState({
      open: !this.state.open
    });

    this.setState({
      settings: !this.state.settings
    });
  };

  render() {
    return (
        <div className={`menu ${this.state.open ? 'active' : ''}`}>
          <header className="menu-header">
            <a href="#" className="menu-logo">
              <svg width="100" height="40" viewBox="0 0 160 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M50.5083 12.9956C49.8026 10.2651 47.7542 2.33822 41.0025 0.390169C34.2808 -1.55119 28.1161 4.29031 26.2088 6.09753C25.9706 6.32324 25.7988 6.48602 25.7007 6.56285C25.5432 6.53534 25.2696 6.45957 24.9 6.35724C22.1964 5.60861 14.359 3.43838 9.30479 8.34458C4.27467 13.235 6.21747 21.5299 6.81857 24.0964C6.89363 24.4168 6.94777 24.648 6.9648 24.772C6.86214 24.8966 6.65811 25.0995 6.38224 25.3739C4.38314 27.3625 -1.38833 33.1034 0.30804 39.9524C2.00166 46.7932 10.1246 49.2444 12.6278 49.9997C12.9372 50.0931 13.1608 50.1606 13.2757 50.2072C13.3305 50.3582 13.4017 50.6336 13.4978 51.0053C14.2037 53.7358 16.2525 61.6612 23.0032 63.6102C29.7278 65.5511 35.895 59.7048 37.7994 57.8995C38.0363 57.6749 38.2073 57.5128 38.3051 57.4361C38.4622 57.4637 38.7348 57.5394 39.1028 57.6415C41.8036 58.3909 49.6442 60.5664 54.6952 55.6558C59.7253 50.7641 57.7825 42.469 57.1814 39.9026C57.1064 39.5821 57.0522 39.351 57.0352 39.2269C57.1379 39.1024 57.3419 38.8994 57.6177 38.625C59.6169 36.6365 65.3883 30.8955 63.692 24.0465C61.9997 17.2137 53.887 14.7601 51.3818 14.0025C51.0699 13.9082 50.845 13.8401 50.7301 13.7932C50.6753 13.6422 50.6042 13.367 50.5083 12.9956ZM45.5907 28.0754C49.9712 28.3696 51.8929 23.2211 51.8929 23.2211L54.8234 25.0101C52.9899 29.3807 49.1998 31.0284 45.4171 30.8375C44.7774 39.0556 42.4042 50.776 36.2394 50.4453C29.8328 50.1003 29.4594 42.1774 29.2942 38.6715C29.2829 38.4325 29.2726 38.214 29.2614 38.0198C27.5987 42.0801 25.4974 45.3216 22.7262 44.3367C14.3257 41.0545 15.6136 22.6107 17.0926 17.6268L24.441 20.3176C23.4512 24.6445 21.7031 38.3374 24.5452 39.3485C26.3838 39.9205 28.9958 31.7882 30.1553 28.1779C30.1859 28.0827 30.2155 27.9907 30.244 27.902L36.0976 29.8309C34.9978 35.4616 34.0557 45.4134 37.0238 46.2569C40.4621 47.2082 42.8542 33.0476 42.805 30.3364C42.805 30.3364 39.5273 28.9072 37.6243 25.2374C36.6113 23.3085 35.9124 21.1131 36.2119 19.0006C36.5115 16.8882 37.8182 14.9695 39.714 14.3256C40.5096 14.0379 41.3804 14.041 42.1741 14.3343C44.0568 15.0817 44.8932 17.4462 45.2593 19.5105C45.6298 21.5996 45.6949 25.1952 45.5907 28.0754ZM40.3406 24.474C41.0721 25.5378 41.9802 26.4667 43.025 27.2202V27.2216C43.0742 25.4632 42.8615 23.4484 42.5547 21.7002C42.0988 19.1084 41.1046 19.0924 40.5576 19.2541C38.4883 19.8689 39.3999 23.1191 40.3406 24.474Z"
                      fill="white"/>
                <path
                    d="M147.744 37.9835C147.879 39.6722 149.135 41.2313 151.655 41.2313C153.568 41.2313 154.481 40.2351 154.481 39.1093C154.481 38.1563 153.828 37.3774 152.178 37.0305L149.353 36.3812C145.224 35.4714 143.356 33.0066 143.356 30.0153C143.356 26.2046 146.743 23.0433 151.349 23.0433C157.433 23.0433 159.477 26.8971 159.736 29.1932L154.912 30.2731C154.738 29.0164 153.828 27.4141 151.389 27.4141C149.876 27.4168 148.657 28.3212 148.657 29.5361C148.657 30.5755 149.439 31.2248 150.612 31.4421L153.654 32.0914C157.87 32.958 160 35.5133 160 38.6301C160 42.0952 157.305 45.6494 151.698 45.6494C145.266 45.6494 143.05 41.4931 142.789 39.0674L147.744 37.9835Z"
                    fill="white"/>
                <path
                    d="M135.949 23.6777H140.257V28.7747H135.949V37.9538C135.949 39.8126 136.818 40.4173 138.469 40.4173C139.166 40.4173 140.252 40.3903 140.252 40.3903V44.996C139.731 45.212 138.687 45.5144 136.991 45.5144C132.82 45.5144 130.218 43.0522 130.218 38.9486V28.7747H126.344V23.6777H130.423V17.3333H135.949V23.6777Z"
                    fill="white"/>
                <path
                    d="M123.302 28.8031H121.562C118.606 28.8031 116.043 30.2313 116.043 34.8222V44.9988H110.264V23.6926H115.872V26.8539C117.177 24.0395 120.132 23.5198 121.958 23.5198C122.408 23.5256 122.857 23.5545 123.304 23.6062L123.302 28.8031Z"
                    fill="white"/>
                <path
                    d="M101.694 23.6926L98.0182 37.3774L94.21 23.6926H88.2357L84.4262 37.3774L80.7521 23.6926H74.6667L81.21 44.9988H87.0774H87.3009L91.2229 31.8579L95.1435 44.9988H95.367H101.234L107.778 23.6926H101.694Z"
                    fill="white"/>
              </svg>
            </a>
            <a href="#" className="menu-toggle" onClick={this.toggleMenu}>
              <span className="icon icon-collapse"/>
              <span className="icon icon-expand"/>
            </a>
          </header>

          <a href="#" className={`btn-menu ${this.state.open ? '' : 'small'}`}>
            <div className="visual">
              <span className="icon icon-add"/>
              <span className="text">Lijst maken</span>
            </div>
          </a>

          <nav className="menu-nav menu-section">
            <a href="#" className="menu-item active">
              <div className="visual">
                <span className="icon icon-bookshelf"/>
                <span className="text">Lijsten</span>
              </div>
            </a>
            <a href="#" className="menu-item">
              <div className="visual">
                <span className="icon icon-group"/>
                <span className="text">Groepen</span>
              </div>
            </a>

            <a href="#" className="menu-item hide-s hide-m hide-l">
              <div className="visual">
                <span className="icon icon-add-circle"/>
                <span className="text">Maken</span>
              </div>
            </a>

            <a href="#" className="menu-item">
              <div className="visual">
                <span className="icon icon-search"/>
                <span className="text">Zoeken</span>
              </div>
            </a>

            <a href="#" className="menu-item hide-xs">
              <div className="visual">
                <span className="icon icon-assessment"/>
                <span className="text">Resultaten</span>
              </div>
            </a>
            <a href="#" className="menu-item hide-xs">
              <div className="visual">
                <span className="icon icon-target"/>
                <span className="text">Planning</span>
              </div>
            </a>

            <a href="#" className="menu-item hide-s hide-m hide-l" onClick={this.toggleSettings}>
              <div className="visual">
                <span className="icon icon-menu"/>
                <span className="text">Meer</span>
              </div>
            </a>
          </nav>

          <div className="sections-wrapper">
            <div className="menu-section">
              <h4 className="menu-section-title">
                <span className="icon icon-menu-book"/>
                <span className="text">boeken</span>
              </h4>
              {/*<a href="#" className="menu-item menu-shortcut">
                <div className="avatar">
                  <img src="" alt="avatar" width="24px" height="24px"/>
                </div>
                <div className="text-container">
                  <h4 className="title">Stepping Stones</h4>
                  <span className="subtitle">3 havo · 5e editie</span>
                </div>
              </a>*/}
             {/* <a href="#" className="menu-item menu-shortcut">
                <div className="avatar">
                  <img src="" alt="avatar" width="24px" height="24px"/>
                </div>
                <div className="text-container">
                  <h4 className="title">Na Klar!</h4>
                  <span className="subtitle">3 havo · 2e editie fdfbdf dfbdfb dfbdfb</span>
                </div>
              </a>*/}
              <a href="#" className="menu-item add">
                <span className="icon icon-add"/>
                <span className="text">Map</span>
              </a>
            </div>
            <div className="menu-section">
              <h4 className="menu-section-title">
                <span className="icon icon-folder"/>
                <span className="text">Groepen</span>
              </h4>
             {/* <a href="#" className="menu-item">
                <span className="icon icon-folder"/>
                <span className="text">Toetsweek</span>
              </a>
              <a href="#" className="menu-item">
                <span className="icon icon-folder"/>
                <span className="text">Scheikunde</span>
              </a>*/}
              <a href="#" className="menu-item">
                <span className="icon icon-folder"/>
                <span className="text">Biologie</span>
              </a>
              <a href="#" className="menu-item">
                <span className="icon icon-folder"/>
                <span className="text">Examen</span>
              </a>
              <a href="#" className="menu-item add">
                <span className="icon icon-add"/>
                <span className="text">Map</span>
              </a>
            </div>
          </div>

          <aside className={`sidebar ${this.state.settings ? 'active' : ''}`}>
            <div className="content">
              <header className="sidebar-header">
                <svg className="sidebar-logo" width="120" height="48" viewBox="0 0 160 64" fill="#8952DA" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M50.5083 12.9956C49.8026 10.2651 47.7542 2.33822 41.0025 0.390169C34.2808 -1.55119 28.1161 4.29031 26.2088 6.09753C25.9706 6.32324 25.7988 6.48602 25.7007 6.56285C25.5432 6.53534 25.2696 6.45957 24.9 6.35724C22.1964 5.60861 14.359 3.43838 9.30479 8.34458C4.27467 13.235 6.21747 21.5299 6.81857 24.0964C6.89363 24.4168 6.94777 24.648 6.9648 24.772C6.86214 24.8966 6.65811 25.0995 6.38224 25.3739C4.38314 27.3625 -1.38833 33.1034 0.30804 39.9524C2.00166 46.7932 10.1246 49.2444 12.6278 49.9997C12.9372 50.0931 13.1608 50.1606 13.2757 50.2072C13.3305 50.3582 13.4017 50.6336 13.4978 51.0053C14.2037 53.7358 16.2525 61.6612 23.0032 63.6102C29.7278 65.5511 35.895 59.7048 37.7994 57.8995C38.0363 57.6749 38.2073 57.5128 38.3051 57.4361C38.4622 57.4637 38.7348 57.5394 39.1028 57.6415C41.8036 58.3909 49.6442 60.5664 54.6952 55.6558C59.7253 50.7641 57.7825 42.469 57.1814 39.9026C57.1064 39.5821 57.0522 39.351 57.0352 39.2269C57.1379 39.1024 57.3419 38.8994 57.6177 38.625C59.6169 36.6365 65.3883 30.8955 63.692 24.0465C61.9997 17.2137 53.887 14.7601 51.3818 14.0025C51.0699 13.9082 50.845 13.8401 50.7301 13.7932C50.6753 13.6422 50.6042 13.367 50.5083 12.9956ZM45.5907 28.0754C49.9712 28.3696 51.8929 23.2211 51.8929 23.2211L54.8234 25.0101C52.9899 29.3807 49.1998 31.0284 45.4171 30.8375C44.7774 39.0556 42.4042 50.776 36.2394 50.4453C29.8328 50.1003 29.4594 42.1774 29.2942 38.6715C29.2829 38.4325 29.2726 38.214 29.2614 38.0198C27.5987 42.0801 25.4974 45.3216 22.7262 44.3367C14.3257 41.0545 15.6136 22.6107 17.0926 17.6268L24.441 20.3176C23.4512 24.6445 21.7031 38.3374 24.5452 39.3485C26.3838 39.9205 28.9958 31.7882 30.1553 28.1779C30.1859 28.0827 30.2155 27.9907 30.244 27.902L36.0976 29.8309C34.9978 35.4616 34.0557 45.4134 37.0238 46.2569C40.4621 47.2082 42.8542 33.0476 42.805 30.3364C42.805 30.3364 39.5273 28.9072 37.6243 25.2374C36.6113 23.3085 35.9124 21.1131 36.2119 19.0006C36.5115 16.8882 37.8182 14.9695 39.714 14.3256C40.5096 14.0379 41.3804 14.041 42.1741 14.3343C44.0568 15.0817 44.8932 17.4462 45.2593 19.5105C45.6298 21.5996 45.6949 25.1952 45.5907 28.0754ZM40.3406 24.474C41.0721 25.5378 41.9802 26.4667 43.025 27.2202V27.2216C43.0742 25.4632 42.8615 23.4484 42.5547 21.7002C42.0988 19.1084 41.1046 19.0924 40.5576 19.2541C38.4883 19.8689 39.3999 23.1191 40.3406 24.474Z"/>
                  <path
                      d="M147.744 37.9835C147.879 39.6722 149.135 41.2313 151.655 41.2313C153.568 41.2313 154.481 40.2351 154.481 39.1093C154.481 38.1563 153.828 37.3774 152.178 37.0305L149.353 36.3812C145.224 35.4714 143.356 33.0066 143.356 30.0153C143.356 26.2046 146.743 23.0433 151.349 23.0433C157.433 23.0433 159.477 26.8971 159.736 29.1932L154.912 30.2731C154.738 29.0164 153.828 27.4141 151.389 27.4141C149.876 27.4168 148.657 28.3212 148.657 29.5361C148.657 30.5755 149.439 31.2248 150.612 31.4421L153.654 32.0914C157.87 32.958 160 35.5133 160 38.6301C160 42.0952 157.305 45.6494 151.698 45.6494C145.266 45.6494 143.05 41.4931 142.789 39.0674L147.744 37.9835Z"/>
                  <path
                      d="M135.949 23.6777H140.257V28.7747H135.949V37.9538C135.949 39.8126 136.818 40.4173 138.469 40.4173C139.166 40.4173 140.252 40.3903 140.252 40.3903V44.996C139.731 45.212 138.687 45.5144 136.991 45.5144C132.82 45.5144 130.218 43.0522 130.218 38.9486V28.7747H126.344V23.6777H130.423V17.3333H135.949V23.6777Z"/>
                  <path
                      d="M123.302 28.8031H121.562C118.606 28.8031 116.043 30.2313 116.043 34.8222V44.9988H110.264V23.6926H115.872V26.8539C117.177 24.0395 120.132 23.5198 121.958 23.5198C122.408 23.5256 122.857 23.5545 123.304 23.6062L123.302 28.8031Z"/>
                  <path
                      d="M101.694 23.6926L98.0182 37.3774L94.21 23.6926H88.2357L84.4262 37.3774L80.7521 23.6926H74.6667L81.21 44.9988H87.0774H87.3009L91.2229 31.8579L95.1435 44.9988H95.367H101.234L107.778 23.6926H101.694Z"/>
                </svg>

                <a href="#" className="icon-link sidebar-close" onClick={this.toggleSettings}>
                  <span className="icon icon-expand-more"/>
                </a>

                <a href="#" className="sidebar-btn" onClick={this.toggleSettings}>
                  <div className="avatar large">
                    <span className="icon icon-person"/>
                  </div>
                  <div className="info-block">
                    <h4 className="user-name">Full username</h4>
                    <span className="user-email">emailaddress@domain.com</span>
                  </div>
                  <div className="collapsed">
                    <span className="text">Mijn account</span>
                  </div>
                </a>
              </header>
              <div className="sidebar-section">
                <a href="#" className="more-menu-item hide-s hide-m hide-l">
                  <span className="icon icon-assessment"/>
                  <span className="text">Resultaten</span>
                </a>
                <a href="#" className="more-menu-item hide-s hide-m hide-l">
                  <span className="icon icon-target"/>
                  <span className="text">Planning</span>
                </a>

                <a href="#" className="more-menu-item">
                  <span className="icon icon-settings"/>
                  <span className="text">Instellingen</span>
                </a>

                <a href="#" className="more-menu-item">
                  <span className="icon icon-rocket"/>
                  <span className="text">Mijn pakket</span>
                </a>

                <a href="#" className="more-menu-item">
                  <span className="icon icon-social"/>
                  <span className="text">Publiek profiel</span>
                </a>
              </div>
              <div className="sidebar-section">
                <a href="#" className="more-menu-item">
                  <span className="icon icon-logout"/>
                  <span className="text">Uitloggen</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
    )
  }
}