import  { useEffect } from 'react';
import PropTypes from 'prop-types';
const TableauReport = ({ vizUrl }) => {
  const tableauScriptUrl = 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';

  useEffect(() => {

    const initViz = () => {
      const containerDiv = document.getElementById('tableauViz');
      const options = {
        width: '1400px',
        height: '900px',
        hideTabs: true,

      };
      new window.tableau.Viz(containerDiv, vizUrl, options);
    };

    const scriptElement = document.createElement('script');
    scriptElement.src = tableauScriptUrl;
    scriptElement.onload = initViz;
    document.body.appendChild(scriptElement);

    return () => {
      document.body.removeChild(scriptElement);
    };
  }, [vizUrl]);

  return (
    <div id="tableauViz"></div>
  );
};

export default TableauReport;

TableauReport.propTypes = {
  vizUrl: PropTypes.string.isRequired,

};