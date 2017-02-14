// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest']},
  sass: {
    options: {
      includePaths: [
        "node_modules/bootstrap-sass/assets/stylesheets",
        "bourbon",
        "base/base",
      ],
      precision: 8 // minimum precision required by bootstrap-sass
    }
  }
};

