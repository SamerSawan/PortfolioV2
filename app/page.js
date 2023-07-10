import Button from "./components/ui/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons'; // Add this line
import '@fortawesome/fontawesome-svg-core/styles.css'
import IconButton from "./components/ui/IconButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mt-20">

        <div className="text-honeydew text-2xl">Hi, my name is</div>
        <div className="text-aquamarine font-bold text-4xl">Samer Sawan</div>
        <div className="text-honeydew text-2xl w-2/5">
          a passionate software engineer dedicated to delivering innovative
          solutions and creating impactful outcomes.
        </div>

        <div className="space-x-12 ml-12">
          <Button icon={faGithub} text={"GitHub"} href="https://github.com/SamerSawan" />
          {/*TODO: ADD HREF OR NEW PAGE TO RESUME*/}
          <Button icon={faFileAlt} text="Resume" />
        </div>

        <div className="text-honeydew text-2xl mt-10 ml-12 w-50">
          <span>Get in touch</span>
          <FontAwesomeIcon className="ml-4" icon={faArrowRight} style={{color: "#dff1e5",}} size='1xs'/>
          <IconButton icon={faLinkedin} href="https://www.linkedin.com/in/samersawan1/"/>
          {/*TODO: ADD CONTACT FORUM OR HREF THAT OPENS MAIL APP */}
          <IconButton icon={faEnvelope}/>
        </div>
      </div>
    </main>
  );
}
