
export interface Props {
	title: string;
	author: string;
	description: string;
}

const ReactCard = ({ title, author, description }: Props) => {
  return (
    <li className="card">	
		<h2>
			{title}
		</h2>
		<small>{author}</small>
		<p>
			{description}
		</p>

    </li>
  )
}

export default ReactCard