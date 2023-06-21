import {styled} from "styled-components"

export const StyledStepInfo = styled.p`
  font-size: 0.9rem !important;

  & > span {
    font-weight: 600;
  }
`

export const StyledFormActions = styled.div`
  margin-top: 1.5rem;

  display: flex;
  gap: 1rem;
`
export const StyledFormContainer = styled.form`
  color: white;
  margin: 0 5rem;
  max-width: 25rem;

  & > p {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
`

export const StyledErrorMessage = styled.p`
  font-size: 16px !important;
  color: red;
  margin-top: 1rem;
`
