
import { pool } from "@/lib/db";
import { NextResponse } from "next/server";
import { logger } from "@/lib/logger";




export async function GET() {
    try {
        const result = await pool.query(
            "SELECT * FROM users"
        );
        
        logger.info("User Fetched Sucessfully", result.rows[0])

        return NextResponse.json(result.rows, {
            status: 200
        });

    } catch (error) {
        logger.error("Failed to connect With Database or User Does not exist")

        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
