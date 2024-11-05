# setDeathCall

Calls specific instructions when any unit in the generator is dead.

This can be used for checkpoint to load entities (e.g. Bonedeth sturctures in the middle of the mission).

## Code Information

- **Name**: `setDeathCall`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 08 00`
- **Assembly Address in Memory** : `0x8b5c548`

## Parameters

- `(int *)generator_index` *(8 bytes)* : Generator Index, obtained from [create](./create.md).
- `(MemoryAddress)pac_address_in_memory` *(8 bytes)* : Obtained from [getPack](./getpack_25100600.md). The memory address where the whole PAC instructions start.
- `(Address)address` *(8 bytes)* : Address, offset from PAC file, to call when an enemy is dead. If does nothing, put an address where is [cmd_end](./cmd_end.md).

## Remarks

**The dead object handles are already deleted when this is called**.

Use [setUnitCtrlTimmingScript_Int](./setunitctrltimingscript_int.md) if the object information is needed.

## Example

Here is one example in hex:

```25 1f 08 00 / 08 00 00 00 / 1a 00 00 00 / 04 00 00 00 / 00 00 00 00 / 01 00 00 00 / 80 38 00 00```

Which is interpreted as:

```c
setDeathCall(((global)int *)giVar26, (int *)iVar0, (index)14464)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5c548(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  undefined4 uVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = *(int *)(param_1 + 0x10);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  else if (*piVar1 == -1) {
    iVar4 = 0;
  }
  else {
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    iVar4 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar4 + 0x2c8), *piVar1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
  }
  if (iVar4 != 0) {
    uVar5 = *puVar3;
    *(undefined4 *)(iVar4 + 0x680) = *puVar2;
    *(undefined4 *)(iVar4 + 0x684) = uVar5;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```
