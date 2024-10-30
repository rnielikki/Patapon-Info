# addAutoCommandKey

Manually sets key for command sequence. This does nothing until [startAutoCommandKey](./startautocommandkey.md) is called.

This performs command like [setAutoCommand](./setautocommand.md), except the command is manually set.

## Code Information

- **Name**: `addAutoCommandKey`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 0f 00`
- **Assembly Address in Memory** : `0x8970a58`

## Parameters

- `(float)timing` *(8 bytes)* : Time as seconds. Normal non-miracle drum hit is every 0.5 seconds without chant turn.
- `(int)drum_id` *(8 bytes)* : [Drum ID](./guide/reference-table.md#drum-ids) to perform.
- `(int)Var2` *(8 bytes)* : Please describe what this does.

## Example

Here is one example in hex:

```25 0c 0f 00 / 10 00 00 00 / 00 00 00 00 / 02 00 00 00 / 03 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
addAutoCommandKey((float)0, (int)3, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970a58(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  
  iVar4 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  if (iVar4 != 0) {
    func_0x08b74690(*puVar1,iVar4 + 8,*puVar2,*puVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

