# setVersusRule

Sets Versus type. This affects PVE enemies' behaviour and attack layer. This is also called in PVP field.

## Code Information

- **Name**: `setVersusRule`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 1c 00`
- **Assembly Address in Memory** : `0x891ab18`

## Parameters

- `(int)versus_type` *(8 bytes)* : Type of the versus.
   - 0 is no VS type, 1 is Head-on, 2 is Missile Battle, 3 is Racing Alley, 4 is Hellgate (unused).

## Example

Here is one example in hex:

```25 16 1c 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setVersusRule((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891ab18(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Get_Some_Flag(1);
  *(undefined4 *)(*(int *)(iVar2 + 0x44) + 0x54c) = *puVar1;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

