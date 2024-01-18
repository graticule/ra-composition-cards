export default function Card({ title, content, href, children }: { title: string, content: string, href?: string, children?: React.ReactNode }) {
  return (
    <div className="card">
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        { href ? <a href={href} className="btn btn-primary" target="_blank">Go somewhere</a> : "" }
      </div>
    </div>
  )
}