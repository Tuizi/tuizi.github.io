angular
    .module('components')
	.service('dateUtils', function () {
		this.getDateLabel = (date) => {
			return date.getMonth() + "/" + date.getDate();
		}
	})