function parseVideo (url) {
    // - Supported YouTube URL formats:
    //   - http://www.youtube.com/watch?v=My2FRPA3Gf8
    //   - http://youtu.be/My2FRPA3Gf8
    //   - https://youtube.googleapis.com/v/My2FRPA3Gf8
    // - Supported Vimeo URL formats:
    //   - http://vimeo.com/25451551
    //   - http://player.vimeo.com/video/25451551
    // - Also supports relative URLs:
    //   - //player.vimeo.com/video/25451551

    url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

    if (RegExp.$3.indexOf('youtu') > -1) {
        var type = 'youtube';
    } else if (RegExp.$3.indexOf('vimeo') > -1) {
        var type = 'vimeo';
    }

    return {
        type: type,
        id: RegExp.$6
    };
}

/** Code for First Video Starts Here **/
 
var video_url_1 = document.querySelectorAll(".video_url_1");

function lazyLoadImg(item){
	var url = item.dataset.embed;
	//console.log(url);
	//console.log(url.length);
	var videoType = parseVideo(url);
	//console.log(videoType);
	if (videoType.type == 'youtube') {
		var source = "https://img.youtube.com/vi/" + videoType.id + "/sddefault.jpg";
		videoThumnail(source, item);
		return;
	}

	if (videoType.type == 'vimeo') {
		$.getJSON('https://vimeo.com/api/oembed.json?url=https://vimeo.com/' + videoType.id, { format: "json"}, function (data) {
			videoThumnail(data.thumbnail_url, item);
		});
	}


}

function videoThumnail(source, item) {
	$(item).append('<img class="image-size" src="'+source+'" />');
}
for (var i = 0; i < video_url_1.length; i++) {
	lazyLoadImg(video_url_1[i]);
}



/** Code For First Video Ends Here 

/**** Code For Second Video Starts Here ****/
var video_url_2 = document.querySelectorAll( ".video_url_2" );

function lazyLoadImg(item){
	var url = item.dataset.embed;
	//console.log(url);
	//console.log(url.length);
	var videoType = parseVideo(url);
	//console.log(videoType);
	if (videoType.type == 'youtube') {
		var source = "https://img.youtube.com/vi/" + videoType.id + "/sddefault.jpg";
		videoThumnail(source, item);
		return;
	}

	if (videoType.type == 'vimeo') {
		$.getJSON('https://vimeo.com/api/oembed.json?url=https://vimeo.com/' + videoType.id, { format: "json", width:'640' }, function (data) {
			videoThumnail(data.thumbnail_url, item);
		});
	}


}

function videoThumnail(source, item) {
	$(item).append('<img class="image-size"  src="'+source+'" />');
}
for (var i = 0; i < video_url_2.length; i++) {
	lazyLoadImg(video_url_2[i]);
}
/**** Code For Second Video Ends Here ****/

/**** Code For Third Video Starts Here ****/
var video_url_3 = document.querySelectorAll( ".video_url_3" );

function lazyLoadImg(item){
	var url = item.dataset.embed;
	//console.log(url);
	//console.log(url.length);
	var videoType = parseVideo(url);
	//console.log(videoType);
	if (videoType.type == 'youtube') {
		var source = "https://img.youtube.com/vi/" + videoType.id + "/sddefault.jpg";
		videoThumnail(source, item);
		return;
	}

	if (videoType.type == 'vimeo') {
		$.getJSON('https://vimeo.com/api/oembed.json?url=https://vimeo.com/' + videoType.id, { format: "json",width:'640' }, function (data) {
			videoThumnail(data.thumbnail_url, item);
		});
	}
}
function videoThumnail(source, item) {
	$(item).append('<img class="image-size"  src="'+source+'" />');
}
for (var i = 0; i < video_url_3.length; i++) {
	lazyLoadImg(video_url_3[i]);
}
/**** Code For Third Video Ends Here ****/

/**** Code For 4th Video Starts Here ****/
var video_url_4 = document.querySelectorAll( ".video_url_4" );

function lazyLoadImg(item){
	var url = item.dataset.embed;
	//console.log(url);
	//console.log(url.length);
	var videoType = parseVideo(url);
	//console.log(videoType);
	if (videoType.type == 'youtube') {
		var source = "https://img.youtube.com/vi/" + videoType.id + "/sddefault.jpg";
		videoThumnail(source, item);
		return;
	}

	if (videoType.type == 'vimeo') {
		$.getJSON('https://vimeo.com/api/oembed.json?url=https://vimeo.com/' + videoType.id, { format: "json",width:'640' }, function (data) {
			videoThumnail(data.thumbnail_url, item);
		});
	}
}
function videoThumnail(source, item) {
	$(item).append('<img class="image-size"  src="'+source+'" />');
}
for (var i = 0; i < video_url_4.length; i++) {
	lazyLoadImg(video_url_4[i]);
}
/**** Code For 4th Video Ends Here ****/

/**** Code For 5th Video Starts Here ****/
var video_url_5 = document.querySelectorAll( ".video_url_5" );

function lazyLoadImg(item){
	var url = item.dataset.embed;
	//console.log(url);
	//console.log(url.length);
	var videoType = parseVideo(url);
	//console.log(videoType);
	if (videoType.type == 'youtube') {
		var source = "https://img.youtube.com/vi/" + videoType.id + "/sddefault.jpg";
		videoThumnail(source, item);
		return;
	}

	if (videoType.type == 'vimeo') {
		$.getJSON('https://vimeo.com/api/oembed.json?url=https://vimeo.com/' + videoType.id, { format: "json",width:'640' }, function (data) {
			videoThumnail(data.thumbnail_url, item);
		});
	}
}
function videoThumnail(source, item) {
	$(item).append('<img class="image-size"  src="'+source+'" />');
}
for (var i = 0; i < video_url_5.length; i++) {
	lazyLoadImg(video_url_5[i]);
}
/**** Code For 5th Video Ends Here ****/
