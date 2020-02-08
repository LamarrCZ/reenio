# reenioInfoPanel

Vitejte na Githubu mé BP pro VŠB-TUO.

Update 08.02.2020:
+ Přejmenovány komponenty z dashboard/court/court-item na dashboard/container/item
+ Vytvořen globální konfigurační soubor config.json, ke kterému přistupuji přes AppConfigService
+ Dynamické vytváření jednotlivých containerů na základě konfigurace
+ Timer, který se aktualizuje každou sekundu a posouvá jednotlivé itemy
+ U každého itemu probíhá kalkulace jeho šířky + X pozice v závislosti na stanoveném času
