import {data} from '../../contents/about.js'
const About = () => {
return (
        <div className="text-left space-x-4">
            <div className="text-primaryAccent ">{data.title}</div>
            <div>{data.description}</div>
        </div>
    )
}

export default About;