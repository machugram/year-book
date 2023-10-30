import { ComponentProps, FunctionComponent } from 'react';
import {PageMeta, PageHeader } from '..';

interface PageLayoutProps {
  showPageHeader?: boolean;
  pageHeaderProps?: ComponentProps<typeof PageHeader>;
  pageMetaProps: ComponentProps<typeof PageMeta>;
}

export const PageLayout: FunctionComponent<PageLayoutProps> = ({
  showPageHeader,
  pageHeaderProps,
  children,
  pageMetaProps,
}) => {
  return (
    <div className="container">
      <PageMeta {...pageMetaProps} />
      {showPageHeader && <PageHeader {...pageHeaderProps} />}
      {children}
    </div>
  );
};
