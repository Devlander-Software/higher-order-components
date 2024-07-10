import { useCallback, useEffect, useMemo, useState } from "react"
import { View } from "react-native"

import { waitFor } from "@devlander/utils"
import { LoadingSpinner } from "../../atoms/loaders/LoadingSpinner/LoadingSpinner.component"
import { PrimaryText } from "../../atoms/typography/PrimaryText/PrimaryText.component"
import { LoadingBackdropContainer } from "./LoadingIndicatorOnBackdrop.styles"
import { TextButton } from "../../molecules/buttons/TextButton/TextButton.component"

export interface LoadingIndicatorOnBackdropProps {
  submitting: boolean
  message?: string
  showCloseOptionAfterSeconds?: number
}

export const LoadingIndicatorOnBackdrop = (
  props: LoadingIndicatorOnBackdropProps,
) => {
  const { submitting, message, showCloseOptionAfterSeconds = 10 } = props
  const [isTakingLongerThanExpected, setIsTakingLongerThanExpected] =
    useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const closeOption = useCallback(async () => {
    setIsTakingLongerThanExpected(false)
    if (!isVisible) {
      setIsVisible(true)
    }

    await waitFor(showCloseOptionAfterSeconds, "s")

    setIsTakingLongerThanExpected(true)
  }, [showCloseOptionAfterSeconds, isVisible])

  useEffect(() => {
    closeOption()
  }, [closeOption])

  const isSubmitting = useMemo(
    () => submitting && isVisible,
    [submitting, isVisible],
  )

  return (
    <LoadingBackdropContainer submitting={isSubmitting}>
      <View>
        <LoadingSpinner size="large" />
        {isTakingLongerThanExpected && (
          <View>
            <PrimaryText onDark paddingTop={20}>
              This is taking longer than expected
            </PrimaryText>
            <TextButton text="Close" onPress={() => setIsVisible(false)} />
          </View>
        )}
        {message && typeof message === "string" && message.length > 0 && (
          <PrimaryText onDark paddingTop={20}>
            {message}
          </PrimaryText>
        )}
      </View>
    </LoadingBackdropContainer>
  )
}

export const DefaultPropsForLoadingIndicatorOnBackdrop: LoadingIndicatorOnBackdropProps =
  {
    submitting: false,
    message: "",
    showCloseOptionAfterSeconds: 10,
  }

LoadingIndicatorOnBackdrop.defaultProps =
  DefaultPropsForLoadingIndicatorOnBackdrop
