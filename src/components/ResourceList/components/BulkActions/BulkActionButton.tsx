import * as React from 'react';
import {classNames} from '@shopify/react-utilities';

import Icon from '../../../Icon';
import UnstyledLink from '../../../UnstyledLink';
import {DisableableAction} from '../../../../types';

import {handleMouseUpByBlurring} from '../../../../utilities/focus';

import * as styles from './BulkActions.scss';

export type Props = {
  disclosure?: boolean,
} & DisableableAction;

export default function Action({
  url,
  external,
  onAction,
  content,
  disclosure,
  accessibilityLabel,
  disabled,
}: Props) {


  const disclosureIconMarkup = disclosure
    ? (
      <span className={styles.ActionIcon}>
        <Icon source="caretDown" />
      </span>
    )
    : null;

  const contentMarkup = disclosureIconMarkup
    ? (
      <span className={styles.ActionContent}>
        <span>{content}</span>
        {disclosureIconMarkup}
      </span>
    )
    : content;

  if (url) {
    return (
      <UnstyledLink
        key={content}
        external={external}
        url={url}
        onMouseUp={handleMouseUpByBlurring}
        className={styles.Button}
        aria-label={accessibilityLabel}
      >
        {contentMarkup}
      </UnstyledLink>
    );
  }

  const className = classNames(
    styles.Button,
    disabled && styles.disabled,
  );

  return (
    <button
      key={content}
      className={className}
      onClick={onAction}
      onMouseUp={handleMouseUpByBlurring}
      aria-label={accessibilityLabel}
      type="button"
      disabled={disabled}
    >
      {contentMarkup}
    </button>
  );
}