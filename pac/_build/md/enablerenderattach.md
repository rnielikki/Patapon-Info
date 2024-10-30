# enableRenderAttach

Determines if it preserves own tree while being attached or not.

## Code Information

- **Name**: `enableRenderAttach`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 71 00`
- **Assembly Address in Memory** : `0x8918c64`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md) of the *attached object*.
- `(bool)follow_parent` *(8 bytes)* : Leave as 0 if there is any child to the handle, 1 might break the own node tree.

## Example

Here is one example in hex:

```25 17 71 00 / 08 00 00 00 / cb 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
enableRenderAttach(((global)int *)giVar203, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08918c64(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  uint uVar4;
  uint *puVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  if ((iVar3 != 0) &&
     (*(byte *)(iVar3 + 0x8c) = *(byte *)(iVar3 + 0x8c) & 0xfb | (*piVar2 != 0) << 2, *piVar2 == 0))
  {
    if (*(int *)(iVar3 + 0x100) == 0) {
      puVar5 = *(uint **)(iVar3 + 0x108);
    }
    else {
      (**(code **)(*(int *)(iVar3 + 4) + 0x3c))(iVar3,0);
      puVar5 = *(uint **)(iVar3 + 0x108);
    }
    if ((puVar5[2] ^ *(uint *)(iVar3 + 0x10c) |
        *puVar5 ^ *(uint *)(iVar3 + 0x104) | puVar5[1] ^ *(uint *)(iVar3 + 0x108)) != 0) {
      uVar4 = puVar5[2];
      while( true ) {
        (**(code **)(*(int *)(uVar4 + 4) + 0x3c))(uVar4,0);
        uVar4 = _DAT_00000004;
        if (puVar5 != (uint *)0x0) {
          puVar5 = (uint *)puVar5[1];
          uVar4 = puVar5[1];
        }
        if ((puVar5[2] ^ *(uint *)(iVar3 + 0x10c) |
            *puVar5 ^ *(uint *)(iVar3 + 0x104) | uVar4 ^ *(uint *)(iVar3 + 0x108)) == 0) break;
        uVar4 = puVar5[2];
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

