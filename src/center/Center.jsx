import './center.css'

import AddReactionIcon from '@mui/icons-material/AddReaction';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Center () {

    const data = [
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos minima culpa in Lorem ipsum dolor sit amet. Lorem, ipsum dolor.'
        }, 
        {
            text: 'each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there'
        },
        {
            text: 'paragraphs begins with the germination of a seed of ideas; this “germination process” is better known as brainstorming'
        },
        {
            text: 'Any cracks, inconsistencies, or other corruptions of the foundation can cause your whole paper to crumble.'
        },

    ]


    return(
        <div className='centerPageContainer'>
            <div className='centerTop'>
                TOP-BAR
            </div>

            {data.map((data) => (
                <>
                <p className='listPart'>
                    {data.text}
                    <div className='iconsList'>
                        <AddReactionIcon className='perIcon'/>
                        <DeleteIcon className='perIcon'/>
                        <EmailIcon className='perIcon'/>
                        <AccessTimeIcon className='perIcon'/>
                    </div>
                </p>
                <hr className='hrList'/>
                </>
            ))}

        </div>
    )
}