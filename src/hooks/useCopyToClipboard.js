import { useCallback, useEffect, useState } from 'react';

const useCopyToClipboard = (text, notifyTimeout = 2500) => {
  const [copyStatus, setCopyStatus] = useState('inactive');
  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(
      () => setCopyStatus('copied'),
      () => setCopyStatus('failed')
    );
  }, [text]);

  useEffect(() => {
    if (copyStatus === 'inactive') {
      return;
    }

    const timeoutId = setTimeout(
      () => setCopyStatus('inactive'),
      notifyTimeout
    );

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [copyStatus]);

  return [copyStatus, copy];
};

export default useCopyToClipboard;
