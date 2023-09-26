import '../../style/root.css'
import '../../style/contact_styles/contact.css'

export default function InputField(props) {

    if (props.span2) {
        return (

            <div class={props.span2}>
                <label for={props.for}>{props.name}</label>
                <input type={props.type} class="form-control" id={props.id} />
            </div>
        );
    }
    else {
        return (
            <div class="form-group">
                <label for={props.for}>{props.name}</label>
                <input type={props.type} class="form-control" id={props.id} />
            </div>

        );
    }


};