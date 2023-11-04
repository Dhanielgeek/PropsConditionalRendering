import React from 'react'
import Profile1 from '../assets/2-removebg-preview.png'
import Profile2 from '../assets/pro2.png'

const StudentContainer = () => {

    const DataStudent = [
        {
            name: "Ben Daniel",
            stack : "Frontend Developer",
            img : Profile1
        },
        {
            name: "Ndulue Issac",
            stack : "Backend Developer",
            img: Profile2
        },
        {
            name: "Adoyi Rose",
            stack : "Frontend Developer",
            img : Profile1
        },
        {
            name: "Othneil Victory",
            stack : "Backend Developer",
            img: Profile2
        },
        {
            name: "Micheal Ike",
            stack : "Frontend Developer",
            img : Profile1
        },
        {
            name: "David Tobe",
            stack : "Backend Developer",
            img: Profile2
        },
        
        {
            name: "Ebube Cynthia",
            stack : "Frontend Developer",
            img : Profile1
        },
        {
            name: "Nzemeke Vivan",
            stack : "Backend Developer",
            img: Profile2
        },
        {
            name: "Chukwu Favour",
            stack : "Backend Developer",
            img : Profile2
        },
        {
            name: "Ijomah Priscilla",
            stack: "Frontend Developer",
            img : Profile1
        },
        {
            name : "Chukwunenye Prosper",
            stack: "Backend Developer",
            img: Profile2
        },
        {
            name: "Chinonso Ebere",
            stack : "Frontend Developer",
            img : Profile1
        },
        {
            name : "Akande Abudlafeez",
            stack: "Backend Developer",
            img: Profile2
        },
        {
            name : "Atanda Temitope",
            stack: "Frontend Developer",
            img: Profile1
        },
        {
            name : "God'spower Obinna",
            stack: "Backend Developer",
            img: Profile2
        },
        {
            name : "Kingsley Chigozie",
            stack: "Frontend Developer",
            img: Profile1
        },
        {
            name : "Olawale Ibrahim",
            stack: "Frontend Developer",
            img: Profile1
        },
        {
            name : "Ameh Loveth",
            stack: "Backend Developer",
            img: Profile2
        },
        {
            name : "Agbanzo Francesca",
            stack: "Frontend Developer",
            img: Profile1
        },
        {
            name : "Odoh Anthony",
            stack: "Backend Developer",
            img: Profile2
        },
        {
            name : "Julius Emmanuel",
            stack: "Frontend Developer",
            img: Profile1
        },
        {
            name : "Gloria Akubo",
            stack: "Backend Developer",
            img: Profile2
        },
        {
            name : "Ujah Collins",
            stack: "Frontend Developer",
            img: Profile1
        },
        {
            name : "Nwobodo Collins",
            stack: "Backend Developer",
            img: Profile2
        }

        
    ]
    




  return (
    <div className='container'>
         <div className='Card_container'>
        {
            DataStudent.map((props)=>(
                
                    
            <div className="student_card" style={{background: props.stack === "Frontend Developer" ? "white" : "#023047"}}   >
              <div className='studentHold'>
                  <div className='line' style={{background: props.stack === "Backend Developer" ? "white" : "#023047"}}></div>
                  <div className='student'>
                  <div className='studentname'>
                      <h2 style={{color: props.stack === "Backend Developer" ? "white" : "#023047"}}>{props.name}</h2>
                      <span style={{color: props.stack === "Backend Developer" ? "white" : "#023047"}}>{props.stack}</span>
                  </div>
                 <div className='studentpro' style={{background: props.stack === "Backend Developer" ? "white" : "#023047"}} >
                  <img src={props.img} alt=""  />
                 </div>
                  </div>
              </div>
              <div className='Other'>
              <div className='otherDiv1' style={{color: props.stack === "Frontend Developer" ? "#023047" : "white"}}>
              <div className='bgPhone' style={{background: props.stack === "Backend Developer" ? "white" : "#023047"}}></div>
               <p>+123456789</p>
              </div>
              <div className='otherDiv2' style={{color: props.stack === "Frontend Developer" ? "#023047" : "white"}}>
            <div className='bgPhone'  style={{background: props.stack === "Backend Developer" ? "white" : "#023047"}}></div>
            <p>your@email.com</p>
          </div>
          <div className='otherDiv3' style={{color: props.stack === "Frontend Developer" ? "#023047" : "white"}}>
            <div className='bgPhone' style={{background: props.stack === "Backend Developer" ? "white" : "#023047"}}></div>
            <p>www.yourwebsitename.com</p>
          </div>
          <div className='otherDiv4' style={{color: props.stack === "Frontend Developer" ? "#023047" : "white"}}>
            <div className='bgPhone'  style={{background: props.stack === "Backend Developer" ? "white" : "#023047"}}></div>
            <p>Number,Street,Building,State,Country</p>
          </div>
              </div>
            </div>
        
            
            ))
        }
        </div>
    </div>
  )
}

export default StudentContainer