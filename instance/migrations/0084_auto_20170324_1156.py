# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-03-24 11:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('instance', '0083_log_entries_index'),
    ]

    operations = [
        migrations.AddField(
            model_name='openedxappserver',
            name='enable_vm_dns_records',
            field=models.BooleanField(default=False, help_text='Set additional DNS records pointing directly to the active app servers.'),
        ),
        migrations.AddField(
            model_name='openedxinstance',
            name='enable_vm_dns_records',
            field=models.BooleanField(default=False, help_text='Set additional DNS records pointing directly to the active app servers.'),
        ),
    ]
