package com.bpci.scheduler.model;

public enum AppointmentStatus {
    BEING_CREATED, FULFILLED, DONE, CANCELED;

    static boolean valid(AppointmentStatus currentStatus, AppointmentStatus newStatus) {
        if (currentStatus == BEING_CREATED) {
            return newStatus == FULFILLED || newStatus == CANCELED;
        } else if (currentStatus == FULFILLED) {
            return newStatus == DONE || newStatus == CANCELED;
        } else if (currentStatus == DONE || newStatus == CANCELED) {
            return false;
        } else {
            throw new RuntimeException("Unrecognized Scheduling Status.");
        }
    }
}
