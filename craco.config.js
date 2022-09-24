module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/css/_colors.scss";
        `,
      },
    },
  },
};