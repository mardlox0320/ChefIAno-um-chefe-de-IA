import type { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
     {children}
</div>
    </div>
  )
}

export default Alert
