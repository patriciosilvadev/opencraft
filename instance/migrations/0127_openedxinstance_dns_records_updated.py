# Generated by Django 2.2.9 on 2020-03-27 13:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('instance', '0126_openedxappserver_add_configuration_site_configuration_settings'),
    ]

    operations = [
        migrations.AddField(
            model_name='openedxinstance',
            name='dns_records_updated',
            field=models.DateTimeField(blank=True, default=None, null=True),
        ),
    ]
