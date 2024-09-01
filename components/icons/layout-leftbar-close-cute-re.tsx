import type { Ref } from 'react'
import { forwardRef, memo } from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'
import { useStyles } from 'react-native-unistyles'

function SvgLayoutLeftbarCloseCuteRe(props: SvgProps, ref: Ref<Svg>) {
  const {
    theme,
  } = useStyles()
  return <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" color={theme.colors.gray12} ref={ref} {...props}><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.5 14.122c-.88-.462-1.508-1.057-1.995-1.892a.457.457 0 0 1 0-.46c.486-.835 1.115-1.43 1.995-1.891M8.953 4a87.613 87.613 0 0 0 0 16M20.5 11.5v1c0 3.771 0 5.657-1.172 6.828C18.157 20.5 16.271 20.5 12.5 20.5h-1c-3.771 0-5.657 0-6.828-1.172C3.5 18.157 3.5 16.271 3.5 12.5v-1c0-3.771 0-5.657 1.172-6.828C5.843 3.5 7.729 3.5 11.5 3.5h1c3.771 0 5.657 0 6.828 1.172C20.5 5.843 20.5 7.729 20.5 11.5" /></Svg>
}
const ForwardRef = forwardRef(SvgLayoutLeftbarCloseCuteRe)
const Memo = memo(ForwardRef)
export default Memo