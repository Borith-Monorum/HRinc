from django.contrib import admin
from django.urls import path, include
from jobsite import views
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

router = routers.SimpleRouter()
router.register('job-list', views.JobListViewSet)
router.register('job-function', views.JobFunctionViewSet)


urlpatterns = [

    path('joblist-api/', include(router.urls)),
    path('joblist-api/detail/<str:pk>/', views.jobList_Detail, name="detail-api"),
    path('joblist-api/update/<str:pk>/', views.jobList_Update, name="update-api"),
    path('joblist-api/inputForm', views.jobListForm, name="inputForm-api"),

    path('admin/', admin.site.urls),
    path('home/', views.jobFunctionTitle, name="home"),
    path('detail/', views.jobList, name="detail"),

]

urlpatterns += [ ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
