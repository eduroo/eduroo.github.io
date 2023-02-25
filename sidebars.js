// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Framework',
      link: {
        type: 'doc',
        id: 'framework/index',
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Components',
          link: {
            type: 'doc',
            id: 'framework/components/index',
          },
          items: [
              'framework/components/common'
          ],
        }
      ]
    }
  ]
};

module.exports = sidebars;
