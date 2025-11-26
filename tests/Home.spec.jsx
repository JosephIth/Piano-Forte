import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../src/pages/Home";

describe("Componente Home", () => {
    it("renderiza el título correctamente", () => {
        render(<Home />);
        expect(screen.getByText("Piano-Forte")).toBeInTheDocument();
    });
    it("contiene un párrafo descriptivo", () => {
        render(<Home />);
        expect(screen.getByText(/Lorem ipsum/i)).toBeInTheDocument();
    });
    it('renderiza el botón "Validar"', () => {
        render(<Home />);
        expect(screen.getByRole("button", {
            name: /validar/i
        })).toBeInTheDocument();
    });
    it("muestra mensaje al hacer clic en Validar", () => {
        render(<Home />);
        const boton = screen.getByRole("button", { name: /validar/i });
        fireEvent.click(boton);
        expect(screen.getByRole("status")).toHaveTextContent("Validadocorrectamente");
    });
    it("el título debería estar dentro de un encabezado (h1/h2/...)", () => {
        render(<Home />);
        const heading = screen.getByRole("heading", { name: /piano-forte/i });
        expect(heading).toBeInTheDocument();
    });

    it("el botón Validar debería tener un aria-label o texto accesible", () => {
        render(<Home />);
        const boton = screen.getByRole("button", { name: /validar/i });
        expect(boton).toHaveAccessibleName("Validar");
    });

    it("no debería mostrar el mensaje de validación antes de hacer clic", () => {
        render(<Home />);
        const statusMessage = screen.queryByRole("status");
        expect(statusMessage).toBeNull();
    });

    it("permite múltiples clics sin romper la UI", () => {
        render(<Home />);
        const boton = screen.getByRole("button", { name: /validar/i });

        fireEvent.click(boton);
        fireEvent.click(boton);
        fireEvent.click(boton);

        const statusMessage = screen.getByRole("status");
        expect(statusMessage).toHaveTextContent(/validadocorrectamente/i);
    });

    it("contiene un elemento contenedor principal", () => {
        render(<Home />);
        const container = screen.getByTestId("home-container");
        expect(container).toBeInTheDocument();
    });

    it("coincide con el snapshot", () => {
        const { asFragment } = render(<Home />);
        expect(asFragment()).toMatchSnapshot();
    });
});
