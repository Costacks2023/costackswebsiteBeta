import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';

const Datas = [
    {
        id: 1,
        title: "Exceed clients’ and colleagues’ expectations",
        para: "We have always managed to outperform the expectations set by our clients as we try to create products that easily beat the status quo of existing products on the market."
    },
    {
        id: 2,
        title: "Take ownership and question the status quo in a constructive manner",
        para: "When it comes to getting into problem solving mode we challenge our own status quo at every step in order to produce the create pathbreaking products."
    },
    {
        id: 3,
        title: "Be brave, curious and experiment – learn from all successes and failures",
        para: "Our products always outshine those already available on the market as we love to experiment as we want to bring out the best within us at all levels."
    },
    {
        id: 4,
        title: "Act in a way that makes all of us proud",
        para: "Whether is customer support or product development we put our hearts into it as if we are edveloping the products for ourselves."
    },
    {
        id: 5,
        title: "Build an inclusive, transparent and socially responsible culture",
        para: "Last but not the least we have created a culture of respect for all our employees in order to transparency and inclusivity."
    }
]




const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    subtitle="Our Values"
                    title="Why should you work with us?"
                    description="100+ clients have trusted us with their projects because of the efficiency and efficacy we show in our work."
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{data.id}</h3>
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
            </ul>
        </div>
    )
}

export default AboutThree;