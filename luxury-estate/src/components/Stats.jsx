import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats(){

  const { ref, inView } = useInView({
    triggerOnce:true,
    threshold:0.4
  });

  const stats = [
    { number: 1200, suffix:"+", label:"Luxury Properties Sold" },
    { number: 18, suffix:"+", label:"Years of Experience" },
    { number: 98, suffix:"%", label:"Client Satisfaction" },
    { number: 45, suffix:"+", label:"Trusted Developers" },
  ];

  return(
    <section className="stats-section" ref={ref}>
      <div className="container">

        <div className="stats-header">
          <span>OUR ACHIEVEMENTS</span>
        </div>

        <div className="stats-grid">
          {stats.map((item,i)=>(
            <div className="stat-card" key={i}>
              <h3>
                {inView && (
                  <CountUp 
                    end={item.number} 
                    duration={2.5}
                    separator=","
                  />
                )}
                {item.suffix}
              </h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
