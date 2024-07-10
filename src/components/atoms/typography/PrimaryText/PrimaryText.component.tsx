import type { BaseTextProps } from "../BaseText/BaseText.component"
import { BaseText } from "../BaseText/BaseText.component"
import { PrimaryTextStyled } from "./PrimaryText.styles"

interface PrimaryTextProps extends BaseTextProps {}

export const PrimaryText = (props: PrimaryTextProps) => {
  const { children, ...rest } = props
  return (
    <PrimaryTextStyled {...rest}>
      <BaseText>{children}</BaseText>
    </PrimaryTextStyled>
  )
}

export const DefaultPropsForPrimaryText: PrimaryTextProps = {}

PrimaryText.defaultProps = DefaultPropsForPrimaryText
