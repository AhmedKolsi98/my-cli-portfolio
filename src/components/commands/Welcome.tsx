import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
██╗  ██╗ ██████╗ ██╗       ██████╗ ███████╗
██║ ██╔╝██╔═══██╗██║      ██╔═══██╗██╔════╝
█████╔╝ ██║   ██║██║█████╗██║   ██║███████╗
██╔═██╗ ██║   ██║██║╚════╝██║   ██║╚════██║
██║  ██╗╚██████╔╝███████╗ ╚██████╔╝███████║
╚═╝  ╚═╝ ╚═════╝ ╚══════╝  ╚═════╝ ╚══════╝
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
██╗  ██╗ ██████╗ ██╗     
██║ ██╔╝██╔═══██╗██║     
█████╔╝ ██║   ██║██║     
██╔═██╗ ██║   ██║██║     
██║  ██╗╚██████╔╝███████╗
╚═╝  ╚═╝ ╚═════╝ ╚══════╝

 ██████╗ ███████╗
██╔═══██╗██╔════╝
██║   ██║███████╗
██║   ██║╚════██║
╚██████╔╝███████║
 ╚═════╝ ╚══════╝
                 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.10.1)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/satnaing/terminal-portfolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
        <Seperator>----</Seperator>
        <div>
          To change the theme, type `<Cmd>theme</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       .,,uod8B8bou,,.
              ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
         ,=m8BBBBBBBBBBBBBBBRPFT?!||||||||||||||
         !...:!TVBBBRPFT||||||||||!!^^""'   ||||
         !.......:!?|||||!!^^""'            ||||
         !.........||||                     ||||
         !.........||||  >Welcome!          ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
          .........||||                    ,||||
          .;.......||||               _.-!!|||||
   .,uodWBBBBb.....||||       _.-!!|||||||||!:'
!YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....
!..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::    .
!....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::      .
!......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^":;:::        .
!........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;         iBBbo.
 ..........YBRPFT?!::::::::::::::::::::::::;iof68bo.      WBBBBbo.
   ..........:::::::::::::::::::::::;iof688888888888b.     YBBBP^
    ........::::::::::::::::;iof688888888888888888888b.     
       ......:::::::::;iof688888888888888888888888888888b.
         ....:::;iof688888888888888888888888888888888899fT!
           ..::!8888888888888888888888888888888899fT|!^"
            ' !!988888888888888888888888899fT|!^"'
                !!8888888888888888899fT|!^"'
                  !988888888899fT|!^"'
                    !9899fT|!^"'
                      !^"'
`}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
