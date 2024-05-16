import Technology from "@/components/Technology"
import Title from "@/components/ui/Title"
import { Separator } from "@/components/ui/Separator"
import logoCss from '../../../public/tech_logos/css_logo.svg'
import logoFlask from '../../../public/tech_logos/flask_logo.svg'
import logoHtml from '../../../public/tech_logos/html_logo.svg'
import logoMysql from '../../../public/tech_logos/mysql_logo.svg'
import logoNext from '../../../public/tech_logos/next_logo.svg'
import logoPy from '../../../public/tech_logos/py_logo.svg'
import logoReact from '../../../public/tech_logos/react_logo.svg'
import logoTs from '../../../public/tech_logos/ts_logo.svg'
import logoTws from '../../../public/tech_logos/tw_logo.svg'

type Logo = {
  src: string;
  name: string;
}

const logos: Logo[] = [{
  src: logoHtml,
  name: 'HTML5'
}, {
  src: logoCss,
  name: 'CSS3'
}, {
  src: logoTs,
  name: 'TypeScript'
}, {
  src: logoPy,
  name: 'Python'
}, {
  src: logoReact,
  name: 'React'
}, {
  src: logoNext,
  name: 'Next.js'
}, {
  src: logoTws,
  name: 'TailwindCSS'
}, {
  src: logoFlask,
  name: 'Flask'
}, {
  src: logoMysql,
  name: 'MySQL'
}
]

function AboutPage() {
  return (
    <div>
      <Title>About this project</Title>
      <p className='m-3 py-2 text-xl'>
        This project is carried out as part of the second stage of the technical tests to be part
        of the first group of the <strong>Vélezreyes+ tech fellowship</strong> program. The technologies used are
        listed below. Put the cursor over each logo to see the name of the technology! 👨🏻‍💻
      </p>
      <Separator />
      <div className="flex items-center justify-center">
        <div className="w-2/3 grid grid-cols-3 py-6 space-y-8">
          {logos.map((logo, index) => (
            <Technology key={index} name={logo.name} logo={logo.src} />
          ))}
        </div>
      </div>
    </div>
  );
}


export default AboutPage;