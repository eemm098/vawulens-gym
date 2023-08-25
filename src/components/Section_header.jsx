

function Section_header({icon , title , className}) {
  return (
      <div className={`section_header ${className}`}>
          <span>{icon}</span>
          <h2>{title}</h2>
       </div>
  )
}

export default Section_header
