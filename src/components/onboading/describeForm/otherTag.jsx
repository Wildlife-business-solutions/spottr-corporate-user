import React from 'react'
import Tag from '../tag'
import { AddText, InputDiv, OtherTagDiv } from './style'

export default function OtherTag({corporateUser, setCorporateUser}) {
    const {businessTags} = corporateUser.data
    // const [tags,setTags] = useState('')
    const convertTags = e => {
        let seperatedTags = e.target.value.split(',');
    
        if(e.target.value.includes(',')){
            seperatedTags.pop()
            setCorporateUser({
                ...corporateUser,
                data:{
                    ...corporateUser.data,
                    businessTags:[...corporateUser.data.businessTags,...seperatedTags]
                }
            })
            e.target.value = ''
        }
      };
    return (
        <OtherTagDiv>
            <p>Add other tags</p>
            <InputDiv>
                {/* <Tag tag='Fishing' />
                <Tag tag='Mountain Climber' /> */}
                {
                    businessTags.map((tag,i)=>(
                        <Tag key={i} tag={tag} />
                    ))
                }
                {/* <Tag tag='Chocolate' />
                <Tag tag='Money Machine' />   */}
                <input onChange={convertTags} />
            </InputDiv>
            <AddText>Add multiple tags by using comma (,)</AddText> 
            <AddText>Adding tags improve search awarenesss for users</AddText> 
        </OtherTagDiv>
    )
}
