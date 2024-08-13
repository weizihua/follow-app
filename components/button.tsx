import type { PressableProps, ViewProps } from 'react-native'
import { ActivityIndicator, Pressable } from 'react-native'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

import type { Color, Radius, ThemeColorKey } from '~/theme'

import { Text } from './text'

type VariantProps = {
  color?: Color
  radius?: Radius
  variant?: 'solid' | 'outlined' | 'ghost'
  isLoading?: boolean
  size?: 'small' | 'medium' | 'large'
}

type ButtonProps = Omit<PressableProps, 'style'> & VariantProps & { style?: ViewProps['style'] }

export function Button({
  children,
  color,
  radius,
  variant,
  isLoading,
  size,
  style,
  ...rest
}: ButtonProps) {
  const { styles, theme } = useStyles(styleSheet)
  return (
    <Pressable
      style={({ pressed }) => (
        [
          styles.button(
            pressed,
            { color, radius, variant, isLoading, size },
          ),
          style,
        ]
      )}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator
          color={
            isLoading ? theme.colors.grayA8
              : variant === 'solid'
                ? theme.colors.accentContrast
                : undefined
          }
        />
      ) : children}
    </Pressable>
  )
}

type TextButtonProps = Omit<ButtonProps, 'children'> & { title: string }

export function TextButton({ title, ...rest }: TextButtonProps) {
  return (
    <Button {...rest}>
      <Text
        contrast="low"
        color={rest.variant === 'solid' ? 'accentContrast' : rest.color}
      >
        {title}
      </Text>
    </Button>
  )
}

const styleSheet = createStyleSheet(theme => ({
  button(pressed: boolean, props?: VariantProps) {
    const { color = 'gray', radius, variant, isLoading, size = 'medium' } = props ?? {}
    if (variant === 'ghost') {
      return {}
    }

    return {
      height: size === 'medium' ? 40 : size === 'large' ? 48 : 32,
      paddingHorizontal: size === 'medium' ? theme.spacing[3] : size === 'large' ? theme.spacing[4] : theme.spacing[2],
      borderRadius: theme.radius[radius ?? 'medium'],
      backgroundColor: isLoading
        ? theme.colors.grayA3
        : pressed
          ? theme.colors[`${color}${variant === 'solid' ? 10 : 5}` as ThemeColorKey]
          : theme.colors[`${color}${variant === 'solid' ? 9 : 3}` as ThemeColorKey],
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-start',
    }
  },
}))
