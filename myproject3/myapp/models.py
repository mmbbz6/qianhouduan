# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Aliyun(models.Model):
    #add_time = models.DateTimeField(auto_now_add=True)
    shiliguige = models.CharField(max_length=50)
    vcpu = models.CharField(max_length=5)
    neicun_GB = models.CharField(max_length=5)
    anliang_hour = models.CharField(max_length=5)
    biaozhunmuluyuejia = models.CharField(max_length=10)
    youhuiyuejia = models.CharField(max_length=10)
    nianfuyuejia = models.CharField(max_length=10)
    sannianfuyuejia = models.CharField(max_length=10)
    wunianfuyuejia = models.CharField(max_length=10)
    jiagediyu = models.CharField(max_length=20)
    shijian = models.CharField(max_length=14)

    def __unicode__(self):
        return self.shiliguige
