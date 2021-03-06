import React from 'react'
import {
    Text,
    Image,
    ButtonProps,
    TouchableOpacity,
    ImageSourcePropType,
} from 'react-native'

import styles from './action-btn.styles'

export interface Props extends Pick<ButtonProps, 'onPress'> {}

interface OwnProps {
    iconSource: ImageSourcePropType
}

const ActionBtn: React.StatelessComponent<Props & OwnProps> = props => (
    <TouchableOpacity style={styles.actionBtn} onPress={props.onPress}>
        <Image source={props.iconSource} style={styles.icon} />
    </TouchableOpacity>
)

export default ActionBtn
