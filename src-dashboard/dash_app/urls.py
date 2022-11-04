from django.conf.urls import url
from django.views.generic import TemplateView


from . import views

urlpatterns = [
    url('bar_graph/$', views.bar_graph, name="bar_graph"),
    url('^$', views.index, name='index'),
    url('client/$', views.client_test, name='client_test'),
    url('client/(?P<color>\w+)/$', views.client_test, name='client_test'),
    url('leo-dev-ml1/day/$', views.day_view, name='day_view'),
    url('leo-dev-ml1/week/$', views.week_view, name='week_view'),
    url('cosmic-2/stage/day/$', views.day_view_stage, name='day_view_stage'),
    url('cosmic-2/stage/day/gallery/$', views.day_gallery_c2, name='day_gallery_c2'),
    url('cosmic-2/gallery/dynamic/$', views.dynamic_gallery, name='dynamic_gallery'),
    url('cosmic-2/stage/week/$', views.week_view_stage, name='week_view_stage'),
    url('mygallery/weiss/$', views.lightGallery_weiss, name='lightGallery_weiss'),
    url('mygallery/maggie/$', views.lightGallery_maggie, name='lightGallery_maggie'),
    url('mygallery/sunshine/$', views.lightGallery_adam, name='lightGallery_adam'),
    url('mygallery/raldtc/$', views.lightGallery_raldtc, name='lightGallery_raldtc'),
    url('mygallery/gpsclocks/$', views.lightGallery_jianGPS, name='lightGallery_jianGPS'),
    url('mygallery/downlinks/$', views.lightGallery_rachelDownlinks, name='lightGallery_rachelDownlinks'),
    url('mygallery/timeseries/$', views.lightGallery_timeSeries, name='lightGallery_timeSeries'),
    url('mygallery/latency/$', views.lightGallery_latency, name='lightGallery_latency'),
    url('kompsat/week/$', views.week_view_kompsat, name='week_view_kompsat'),
    url('kompsat/day/$', views.day_view_kompsat, name='day_view_kompsat'),
    url('paz/week/$', views.week_view_paz, name='week_view_paz'),
    url('paz/day/$', views.day_view_paz, name='day_view_paz'),
    url('geoopt/day/$', views.geoopt_day_view, name='geoopt_day_view'),
    url('geoopt/week/$', views.geoopt_week_view, name='geoopt_week_view'),
    url('spire/day/$', views.spire_day_view, name='spire_day_view'),
    url('spire/week/$', views.spire_week_view, name='spire_week_view'),
    url('multiple/(?P<filename>\w+)/$', views.multiple_sets, name='multiple_sets'),
]

