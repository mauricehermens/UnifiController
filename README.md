# UnifiController
Deze Repo bevat een Docker-Compose file om een Unifi Controller te draaien op een Raspberry Pi.

> [!WARNING]
> Alleen getest op een **Raspberry Pi 3 Model B Rev 1.2**

> [!IMPORTANT]
> De eerste keer dat de containers gestart worden kan het wat langer duren omdat de database gecreeerd moet worden.

## Stappenplan

- Installeer het laatste OS (Bookworm) via Pi Imager op een SD kaart
    - _Zorg dat je SSH enabled in de wizard van de PI Imager zodat je remote toegang hebt!_
- Maak via een SSH-client (Putty) verbinding naar de Raspberry
- Pas de hoeveelheid geheugen aan die voor de GPU wordt gebruikt:
    - ``sudo nano /boot/config.txt``
    - scroll naar volledig naar beneden en voeg de waarde: ``gpu_mem=16``  onderaan toe 
    - Sluit editor af met ``CTRL+X``
    - Sla de wijzigingen op met ``Y`` en hierna ``ENTER``
-	Update de Raspberry
    - ``sudo apt update && sudo apt upgrade`` 
-	Reboot de raspberry
    - ``sudo reboot``
-	Update de Firmware van de Raspberry
    - ``sudo rpi-update``
    - Hierna rebooten middels ``sudo reboot``
-	Installeer Docker & Docker Compose
    - ``sudo apt install docker docker-compose``
-	Voeg de Pi user toe aan de docker groep
    - ``sudo usermod -aG docker ${USER}``
-	Zorg dat Docker bij het rebooten automatisch gestart wordt
    - ``sudo systemctl enable docker``
-	Reboot de raspberry 
    - ``sudo reboot``
-	Installeer Portainer om via een webinterface inzicht te hebben welke containers er draaien
    -  ``docker pull portainer/portainer-ce:latest``
    - ``docker run -d -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest``
-	Ga naar /home/pi
    - ``cd /home/pi``   
-	Clone deze repository
    - ``git clone https://github.com/mauricehermens/UnifiController.git``
-	Open de repository lokaal
    - ``cd “UnifiController``
    - > [!NOTE] 
> Later kun je (indien noodzakelijk) in deze directory met “git pull” de repository updaten.
    
-	Download en start de containers
    - ``docker-compose up -d``
-	Controlleer of alles juist draait op: ``http://_ip_controller_:9000)
