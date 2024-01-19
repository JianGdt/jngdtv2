import { actionButton } from "../constant/actionBtn";
import Buttons from "./Buttons";


export default function ActionButton() {
	return (
		<ul className="gap-x-2 flex">
			{actionButton.map((btn, index) => (
				<Buttons key={index} btnLabel={btn.btnLabel}/>
			))}
		</ul>

	)
}