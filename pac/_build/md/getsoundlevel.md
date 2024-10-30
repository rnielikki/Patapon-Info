# getSoundLevel

Gets if current combo status is fever or pre-fever.

## Code Information

- **Name**: `getSoundLevel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 15 00`
- **Assembly Address in Memory** : `0x8970d48`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* the current combostatus (0 is no fever, 1 is pre-fever, 2 is fever).

## Example

Here is one example in hex:

```25 0c 15 00 / 08 00 00 00 / 25 00 00 00```

Which is interpreted as:

```c
getSoundLevel(((global)int *)giVar37)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970d48(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  *puVar1 = 0;
  if (iVar2 != 0) {
    *puVar1 = *(undefined4 *)(iVar2 + 0x69c);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

