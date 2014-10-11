exports.name = 'one';
exports.version = '0.2';

exports.filters = {
  enabled: function(writers, name) {
    return writers.filter(function(writer) {
      return ~writer.indexOf(name)
    }).length;
  }
};
