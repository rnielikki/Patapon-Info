# callMessageWindow

Makes *speech bubble* on a specific target.

See also [How To: Set Speech Bubble](./guide/how-to-set-speech-bubble.md)

## Code Information

- **Name**: `callMessageWindow`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 2d 00`
- **Assembly Address in Memory** : `0x8913aa0`

## Parameters

- `(int *)handle_id` *(8 bytes)* : [Handle](./guide/category.md#getting-handle) to set thue bubble above.
- `(int *)destination` *(8 bytes)* : Destination to *store message handle*.
- `(float)position_x` *(8 bytes)* : X offset to move the bubble, as *PSP screen pixels*.
- `(float)position_y` *(8 bytes)* : Y offset to move the bubble, as *PSP screen pixels*.
- `(float)duratoin` *(8 bytes)* : Time as *seconds* to show the message.
  - If this is smaller than zero, this functions like [keyCloseMessageWindow](./keyclosemessagewindow.md), except the window can't be closed without [closeMessageWindow](./closemessagewindow.md).
- `(int)node_id` *(8 bytes)* : [Node ID](./guide/about-nodes.md) to put the speech bubble, **keep -1 for root (default) node**.
- `(int)Var6` *(8 bytes)* : Seems like it does not do anything, but *keep this as 0*.
- `(Address)message_address` *(4 bytes)* : Message ID from **message address table in the PAC file**. Details on: [about message table](./guide/about-message.md#message-table).
- `(int)hide_long_message` *(8 bytes)* : The value is **is 1 or not**. If this is 1, *Long message will be invisible*.

Note that **PSP screen size is 480 x 272**.

## Example

Here is one example in hex:

```25 17 2d 00 / 04 00 00 00 / 0a 00 00 00 / 08 00 00 00 / 5b 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 48 42 / 10 00 00 00 / 00 00 80 bf / 02 00 00 00 / ff ff ff ff / 02 00 00 00 / 00 00 00 00 / 0c e6 05 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
callMessageWindow((int *)iVar10, ((global)int *)giVar91, (float)0, (float)50, (float)-1, (int)-1, (int)0, 0x5e60c, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08913aa0(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  int *piVar6;
  undefined4 *puVar7;
  undefined4 *puVar8;
  int *piVar9;
  undefined4 uVar10;
  int iVar11;
  int iVar12;
  int iVar13;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  piVar6 = (int *)Pac_Get_Param(param_2,5,1,4);
  puVar7 = (undefined4 *)Pac_Get_Param(param_2,6,1,4);
  puVar8 = (undefined4 *)Pac_Get_Param(param_2,7,0,4);
  piVar9 = (int *)Pac_Get_Param(param_2,8,1,4);
  uVar10 = Get_FullMessage(param_2,*puVar8);
  if (*piVar1 != -1) {
    iVar11 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar11 == 0) {
      iVar11 = 0;
    }
    if (iVar11 != 0) {
      iVar13 = *piVar6;
      if (iVar13 == -2) {
        piVar1 = *(int **)(*(int *)(iVar11 + 200) + 0x60);
        if (piVar1 == (int *)0x0) {
          iVar13 = -1;
        }
        else {
          iVar13 = (**(code **)(*piVar1 + 0x48))(piVar1,s_body_08a5c9b8);
        }
        iVar12 = *piVar9;
      }
      else {
        iVar12 = *piVar9;
      }
      uVar10 = (**(code **)(*(int *)(iVar11 + 4) + 0xec))
                         (*puVar3,*puVar4,*puVar5,iVar11,uVar10,iVar13,*puVar7,iVar12 == 1,1);
      *puVar2 = uVar10;
      (**(code **)(*(int *)(iVar11 + 4) + 0xf8))(iVar11,1);
      if (*piVar6 == -2) {
        (**(code **)(*(int *)(iVar11 + 4) + 0xfc))(iVar11,1);
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

