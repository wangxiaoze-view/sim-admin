export default {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order',
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
  ignoreFiles: ['dist/**/*', 'index.html', 'remote-components-lib-main'],
}
