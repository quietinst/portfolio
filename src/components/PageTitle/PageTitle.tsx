import './PageTitle.scss';

interface PageTitleProps {
  lead: string;
  accent: string;
}

const PageTitle = ({ lead, accent }: PageTitleProps) => (
  <h1 className="page-title">
    {lead} <span>{accent}</span>
  </h1>
);

export default PageTitle;
