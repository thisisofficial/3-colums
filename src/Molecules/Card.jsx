import { Cont, InnerCont } from "./Particles/Atoms/containers";
import { Text, Title } from "./Particles/Atoms/text";
import { Button } from "./Particles/buttons";

import React from 'react'

export function Card({index, bgcolor, text, title}) {
  return (
    <Cont index={index} bgcolor={bgcolor}>
        <InnerCont>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Button bgcolor={bgcolor}></Button>
        </InnerCont>
    </Cont>
  )
}
